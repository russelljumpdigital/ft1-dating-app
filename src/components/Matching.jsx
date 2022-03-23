import MatchedUser from "./matching/MatchedUser";
import "./matching/matching.scss";
import {
  getUserById,
  distanceFilter,
  ageFilter,
  genderFilter,
  heightFilter,
  existingKidsFilter,
  openToKidsFilter,
} from "../utils/matching";
import Search from "./Search";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Matching = (props) => {
  const users = useSelector((state) => state.matching.users);
  console.log(users);

  const [currentResultIndex, setCurrentResultIndex] = useState(0);

  const [filterOptions, setFilterOptions] = useState({
    // seenFilter: true,
    genderFilter: true,
    heightFilter: true,
    existingKidsFilter: true,
    openToKidsFilter: true,
    distanceFilter: true,
    ageFilter: true,
  });

  // just for WiP
  const currentUserId = 1;

  let currentUser = getUserById(currentUserId, users);

  //seen NEEDS WORK
  const seenFilter = (currentUser, user) => {
    return currentUser.seen.includes(currentUser.userId) === false;
  };

  const potentialMatchFilter = (user) => {
    // if (filterOptions.seenFilter) filteredUser = seenFilter(filteredUser)
    return filterOptions.distanceFilter && !distanceFilter(currentUser, user)
      ? false
      : filterOptions.ageFilter && !ageFilter(currentUser, user)
      ? false
      : filterOptions.genderFilter && !genderFilter(currentUser, user)
      ? false
      : filterOptions.heightFilter && !heightFilter(currentUser, user)
      ? false
      : filterOptions.existingKidsFilter &&
        !existingKidsFilter(currentUser, user)
      ? false
      : filterOptions.openToKidsFilter && !openToKidsFilter(currentUser, user)
      ? false
      : true;
  };

  // recieves array of filtered users
  const potentialMatchSorter = (userA, userB) => {
    const kidsPointer = (user) => {
      const cUserPref = currentUser.preferences.lifeStyle.openToKids;
      const userPref = user.preferences.lifeStyle.openToKids;

      // NB: want/don't want is filtered out in potentialMatchFilter
      return cUserPref > 0 && cUserPref === userPref // neither "dont say" and both are same
        ? 10
        : (cUserPref === 3 && userPref === 4) ||
          (cUserPref === 4 && userPref === 3) || // want + open
          (cUserPref === 3 && userPref === 2) ||
          (cUserPref === 2 && userPref === 3) // not sure + open
        ? 5
        : (cUserPref === 1 && userPref === 3) ||
          (cUserPref === 3 && userPref === 1) // dont want + open
        ? -5
        : 0; // either doesn't say, not sure + dont want, not sure + want
    };

    const marriageCasualPointer = (user) => {
      const cUserPref = {
        marriage: currentUser.preferences.lifeStyle.marriage,
        casual: currentUser.preferences.lifeStyle.casual,
      };
      const userPref = {
        marriage: user.preferences.lifeStyle.marriage,
        casual: user.preferences.lifeStyle.casual,
      };

      return cUserPref.marriage === userPref.marriage &&
        cUserPref.casual === userPref.casual // MC MC, Mc Mc, mC mC
        ? 10
        : (!cUserPref.marriage &&
            cUserPref.casual &&
            userPref.marriage &&
            !userPref.casual) || // mC Mc
          (cUserPref.marriage &&
            !cUserPref.casual &&
            !userPref.marriage &&
            userPref.casual) // Mc mC
        ? -10
        : 5; // MC mC, MC Mc
    };

    const religionPointer = (user) => {
      const cUserRelig = currentUser.personalDetails.religion;
      const userRelig = user.personalDetails.religion;

      return cUserRelig === 0 || userRelig === 0 // cUser or user doesn't say
        ? 0
        : cUserRelig === userRelig // both share same religion
        ? 10
        : cUserRelig !== 3 && userRelig !== 3 // both are non-atheist
        ? 5
        : -5; // athiest and religion
    };

    const lastSeen = (user) => {
      return currentUser.seen[-1] === user.userId ? 999 : 0;
    };

    let totalPointsUserA =
      marriageCasualPointer(userA) +
      kidsPointer(userA) +
      religionPointer(userA) +
      lastSeen(userA);
    let totalPointsUserB =
      marriageCasualPointer(userB) +
      kidsPointer(userB) +
      religionPointer(userB) +
      lastSeen(userA);

    return totalPointsUserA < totalPointsUserB
      ? 1
      : totalPointsUserA > totalPointsUserB
      ? -1
      : 0;
  };

  let filteredUsers = [...users];
  filteredUsers
    .splice(
      filteredUsers.findIndex((user) => user === currentUser),
      1
    )
    .filter(potentialMatchFilter);
  filteredUsers = filteredUsers.sort(potentialMatchSorter);

  let userForReview = filteredUsers[currentResultIndex];

  // useEffect(() => {
  //   if (currentResultIndex < filteredUsers.length)
  //     // props.addToSeen(userForReview.userId, currentUser.userId);
  // }, [currentResultIndex]);

  const onLike = (user) => {
    props.addToLikes(user, currentUser.userId);
    // setCurrentResultIndex(currentResultIndex + 1);
  };

  const onPass = () => {
    setCurrentResultIndex(currentResultIndex + 1);
  };

  return (
    <>
      <Search
        setFilterOptions={setFilterOptions}
        filterOptions={filterOptions}
      />

      {currentResultIndex < filteredUsers.length ? (
        <>
          <div className="userCard">
            <MatchedUser user={userForReview} />
          </div>
          <button onClick={() => onLike(userForReview)}>Like</button>
          <button onClick={() => onPass()}>Pass</button>{" "}
        </>
      ) : (
        <p>
          You've seen all potential matches in current search parameters, try
          again later or be less picky!
        </p>
      )}
    </>
  );

  //  {props.addToSeen(userForReview.userId, currentUser.userId)}
  // return (
  //   <>
  //     <Search
  //       setFilterOptions={setFilterOptions}
  //       filterOptions={filterOptions}
  //     />

  //     <div className="userCardContainer">
  //       {filteredUsers
  //         // .filter(potentialMatchFilter)
  //         // .sort(potentialMatchSorter)
  //         .map((user, i) => {
  //           return (
  //             <>
  //               <div className="userCard" key={i}>
  //                 <MatchedUser user={user} />
  //               </div>

  //               <button
  //                 key={`pass${i}`}
  //                 onClick={() => props.onLikeUpdate(user, false)}
  //               >
  //                 Pass
  //               </button>

  //               <button
  //                 key={`like${i}`}
  //                 onClick={() => props.onLikeUpdate(user, true)}
  //               >
  //                 Like
  //               </button>
  //             </>
  //           );
  //         })}
  //       {/* {Controls} */}
  //     </div>
  //   </>
  // );
};

export default Matching;
