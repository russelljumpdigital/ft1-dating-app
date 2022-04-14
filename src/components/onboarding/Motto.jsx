import { gsap } from "gsap";
import { useEffect } from "react";
import "./Motto.scss";

const Motto = () => {
  useEffect(() => {
    gsap.to("#spark", { fill: "#F15249", duration: 2, repeat: -1, yoyo: true });
    gsap.fromTo(
      ".hearts",
      { x: 0, yoyo: true, repeat: -1, ease: "slow(0.7, 0.7, false)" },
      { x: 20, yoyo: true, repeat: -1, ease: "slow(0.7, 0.7, false)" }
    );
    gsap.fromTo(
      ".hearts1",
      { x: 20, yoyo: true, repeat: -1, ease: "slow(0.7, 0.7, false)" },
      { x: 0, yoyo: true, repeat: -1, ease: "slow(0.7, 0.7, false)" }
    );
  }, []);
  return (
    <>
      <div className="motto">
        <p className="h6 d-flex justify-content-center">
          Here at Find Sparks, we like to think of ourselves as a match-box.
        </p>
        <p className="h6 d-flex justify-content-center">
          Register or Login in today to find your spark.
        </p>
        <svg
          width="100"
          height="90"
          viewBox="0 0 496 454"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="logo">
            <path
              id="spark"
              d="M248.725 240.227L247.668 239.177L246.611 240.227L200.718 285.807L194.867 221.39L194.732 219.907L193.247 220.031L128.785 225.445L165.699 172.328L166.549 171.105L165.331 170.246L112.47 132.968L174.891 116.016L176.329 115.625L175.948 114.185L159.434 51.644L218.149 78.7826L219.501 79.4077L220.135 78.0594L247.668 19.5243L275.2 78.0594L275.834 79.4076L277.186 78.7827L335.917 51.6439L319.388 114.185L319.007 115.625L320.445 116.016L382.866 132.968L330.005 170.246L328.787 171.105L329.637 172.328L366.551 225.444L302.105 220.031L300.62 219.907L300.485 221.39L294.617 285.807L248.725 240.227Z"
              fill="#F6BB42"
              stroke="#FAA500"
              strokeWidth="3"
            />
            <g id="dots" className="dots">
              <path
                id="Vector"
                className="dots"
                d="M122.998 198.004C122.998 203.887 118.232 208.668 112.342 208.668C106.452 208.668 101.671 203.887 101.671 198.004C101.671 192.106 106.452 187.332 112.342 187.332C118.232 187.332 122.998 192.105 122.998 198.004Z"
                fill="#F15249"
              />
              <path
                id="Vector_2"
                className="dots"
                d="M165.668 325.993C165.668 331.898 160.887 336.664 154.997 336.664C149.107 336.664 144.341 331.898 144.341 325.993C144.341 320.102 149.107 315.337 154.997 315.337C160.887 315.337 165.668 320.102 165.668 325.993Z"
                fill="#F15249"
              />
              <path
                id="Vector_3"
                className="dots"
                d="M80.343 155.333C80.343 161.224 75.562 165.997 69.671 165.997C63.781 165.997 59 161.224 59 155.333C59 149.442 63.781 144.67 69.671 144.67C75.562 144.67 80.343 149.442 80.343 155.333Z"
                fill="#C93131"
              />
              <path
                id="Vector_4"
                className="dots"
                d="M421.662 219.332C421.662 225.222 416.881 230.003 410.99 230.003C405.099 230.003 400.334 225.222 400.334 219.332C400.334 213.441 405.1 208.668 410.99 208.668C416.88 208.668 421.662 213.441 421.662 219.332Z"
                fill="#C93131"
              />
              <path
                id="Vector_5"
                className="dots"
                d="M336.336 347.336C336.336 353.211 331.555 357.992 325.664 357.992C319.773 357.992 314.992 353.211 314.992 347.336C314.992 341.43 319.773 336.664 325.664 336.664C331.555 336.664 336.336 341.43 336.336 347.336Z"
                fill="#C93131"
              />
              <path
                id="Vector_6"
                className="dots"
                d="M464.017 154.672C464.017 160.563 459.236 165.335 453.345 165.335C447.454 165.335 442.673 160.563 442.673 154.672C442.673 148.781 447.454 144 453.345 144C459.236 144 464.017 148.781 464.017 154.672Z"
                fill="#F15249"
              />
            </g>
            <path
              id="Vector_7"
              d="M236 219V373.563C236 379.869 241.152 385 247.499 385C253.847 385 259 379.869 259 373.563V219H236Z"
              fill="#532605"
            />
            <g id="hearts">
              <path
                className="hearts"
                id="Vector_8"
                d="M45.5556 229.278C52.7778 229.278 59.1111 233.278 61.3333 239.389C61.5556 239.944 62.2222 240.278 63 240.167C63.6667 240.389 64.4444 240.056 64.6667 239.389C66.8889 233.389 73.2222 229.278 80.4444 229.278C89.5556 229.278 97 235.833 97 243.833C97 246.722 96 249.611 94.1111 252.056C94.1111 252.056 94.1111 252.056 94.1111 252.167L94 252.278L63 288.833L32 252.167L31.8889 252.056C30 249.611 29 246.833 29 243.833C29 235.833 36.4444 229.278 45.5556 229.278Z"
                fill="#F15249"
              />
              <path
                className="hearts"
                id="Vector_9"
                d="M63 240.056C63.6667 240.278 64.4444 239.944 64.6667 239.278C66.8889 233.278 73.2222 229.167 80.4444 229.167C89.5556 229.167 97 235.722 97 243.722C97 246.611 96 249.5 94.1111 251.944C94.1111 251.944 94.1111 251.944 94.1111 252.056L94 252.167L63 288.833"
                fill="#C93131"
              />
              <path
                id="Vector_10"
                className="hearts"
                d="M34.2222 246.833C33.3333 246.833 32.5555 246.056 32.5555 245.167C32.5555 238.278 38.7778 232.722 46.4444 232.722C47.3333 232.722 48.1111 233.5 48.1111 234.389C48.1111 235.278 47.3333 236.056 46.4444 236.056C40.6667 236.056 35.8889 240.167 35.8889 245.167C35.8889 246.167 35.1111 246.833 34.2222 246.833Z"
                fill="#F99595"
              />
              <g id="Frame">
                <path
                  id="Vector_11"
                  className="hearts"
                  d="M45.5556 229.278C52.7778 229.278 59.1111 233.278 61.3333 239.389C61.5556 239.944 62.2222 240.278 63 240.167C63.6667 240.389 64.4444 240.056 64.6667 239.389C66.8889 233.389 73.2222 229.278 80.4444 229.278C89.5556 229.278 97 235.833 97 243.833C97 246.722 96 249.611 94.1111 252.056C94.1111 252.056 94.1111 252.056 94.1111 252.167L94 252.278L63 288.833L32 252.167L31.8889 252.056C30 249.611 29 246.833 29 243.833C29 235.833 36.4444 229.278 45.5556 229.278Z"
                  fill="#F15249"
                />
                <path
                  id="Vector_12"
                  className="hearts"
                  d="M63 240.055C63.6667 240.278 64.4444 239.944 64.6667 239.278C66.8889 233.278 73.2222 229.167 80.4444 229.167C89.5556 229.167 97 235.722 97 243.722C97 246.611 96 249.5 94.1111 251.944C94.1111 251.944 94.1111 251.944 94.1111 252.055L94 252.167L63 288.833"
                  fill="#C93131"
                />
                <path
                  id="Vector_13"
                  className="hearts"
                  d="M34.2222 246.833C33.3333 246.833 32.5555 246.056 32.5555 245.167C32.5555 238.278 38.7778 232.722 46.4444 232.722C47.3333 232.722 48.1111 233.5 48.1111 234.389C48.1111 235.278 47.3333 236.056 46.4444 236.056C40.6667 236.056 35.8889 240.167 35.8889 245.167C35.8889 246.167 35.1111 246.833 34.2222 246.833Z"
                  fill="#F99595"
                />
              </g>
            </g>
            <g id="hearts_2">
              <path
                id="Vector_14"
                className="hearts1"
                d="M41.5556 24.2778C48.7778 24.2778 55.1111 28.2778 57.3333 34.3889C57.5556 34.9444 58.2222 35.2778 59 35.1667C59.6667 35.3889 60.4444 35.0555 60.6667 34.3889C62.8889 28.3889 69.2222 24.2778 76.4444 24.2778C85.5556 24.2778 93 30.8333 93 38.8333C93 41.7222 92 44.6111 90.1111 47.0555C90.1111 47.0555 90.1111 47.0555 90.1111 47.1667L90 47.2778L59 83.8333L28 47.1667L27.8889 47.0555C26 44.6111 25 41.8333 25 38.8333C25 30.8333 32.4444 24.2778 41.5556 24.2778Z"
                fill="#F15249"
              />
              <path
                id="Vector_15"
                className="hearts1"
                d="M59 35.0555C59.6667 35.2778 60.4444 34.9444 60.6667 34.2778C62.8889 28.2778 69.2222 24.1667 76.4444 24.1667C85.5556 24.1667 93 30.7222 93 38.7222C93 41.6111 92 44.5 90.1111 46.9444C90.1111 46.9444 90.1111 46.9444 90.1111 47.0555L90 47.1667L59 83.8333"
                fill="#C93131"
              />
              <path
                id="Vector_16"
                className="hearts1"
                d="M30.2222 41.8333C29.3333 41.8333 28.5555 41.0556 28.5555 40.1667C28.5555 33.2778 34.7778 27.7222 42.4444 27.7222C43.3333 27.7222 44.1111 28.5 44.1111 29.3889C44.1111 30.2778 43.3333 31.0556 42.4444 31.0556C36.6667 31.0556 31.8889 35.1667 31.8889 40.1667C31.8889 41.1667 31.1111 41.8333 30.2222 41.8333Z"
                fill="#F99595"
              />
            </g>
            <g id="hearts_3">
              <path
                id="Vector_17"
                className="hearts"
                d="M403.556 28.2778C410.778 28.2778 417.111 32.2778 419.333 38.3889C419.556 38.9444 420.222 39.2778 421 39.1667C421.667 39.3889 422.444 39.0555 422.667 38.3889C424.889 32.3889 431.222 28.2778 438.444 28.2778C447.556 28.2778 455 34.8333 455 42.8333C455 45.7222 454 48.6111 452.111 51.0555C452.111 51.0555 452.111 51.0555 452.111 51.1667L452 51.2778L421 87.8333L390 51.1667L389.889 51.0555C388 48.6111 387 45.8333 387 42.8333C387 34.8333 394.444 28.2778 403.556 28.2778Z"
                fill="#F15249"
              />
              <path
                id="Vector_18"
                className="hearts"
                d="M421 39.0555C421.667 39.2778 422.444 38.9444 422.667 38.2778C424.889 32.2778 431.222 28.1667 438.444 28.1667C447.556 28.1667 455 34.7222 455 42.7222C455 45.6111 454 48.5 452.111 50.9444C452.111 50.9444 452.111 50.9444 452.111 51.0555L452 51.1667L421 87.8333"
                fill="#C93131"
              />
              <path
                id="Vector_19"
                className="hearts"
                d="M392.222 45.8333C391.333 45.8333 390.556 45.0556 390.556 44.1667C390.556 37.2778 396.778 31.7222 404.444 31.7222C405.333 31.7222 406.111 32.5 406.111 33.3889C406.111 34.2778 405.333 35.0556 404.444 35.0556C398.667 35.0556 393.889 39.1667 393.889 44.1667C393.889 45.1667 393.111 45.8333 392.222 45.8333Z"
                fill="#F99595"
              />
              <g id="Frame_2">
                <path
                  id="Vector_20"
                  className="hearts"
                  d="M403.556 28.2778C410.778 28.2778 417.111 32.2778 419.333 38.3889C419.556 38.9444 420.222 39.2778 421 39.1667C421.667 39.3889 422.444 39.0555 422.667 38.3889C424.889 32.3889 431.222 28.2778 438.444 28.2778C447.556 28.2778 455 34.8333 455 42.8333C455 45.7222 454 48.6111 452.111 51.0555C452.111 51.0555 452.111 51.0555 452.111 51.1667L452 51.2778L421 87.8333L390 51.1667L389.889 51.0555C388 48.6111 387 45.8333 387 42.8333C387 34.8333 394.444 28.2778 403.556 28.2778Z"
                  fill="#F15249"
                />
                <path
                  id="Vector_21"
                  className="hearts"
                  d="M421 39.0555C421.667 39.2778 422.444 38.9444 422.667 38.2778C424.889 32.2778 431.222 28.1667 438.444 28.1667C447.556 28.1667 455 34.7222 455 42.7222C455 45.6111 454 48.5 452.111 50.9444C452.111 50.9444 452.111 50.9444 452.111 51.0555L452 51.1667L421 87.8333"
                  fill="#C93131"
                />
                <path
                  id="Vector_22"
                  className="hearts"
                  d="M392.222 45.8333C391.333 45.8333 390.556 45.0556 390.556 44.1667C390.556 37.2778 396.778 31.7222 404.444 31.7222C405.333 31.7222 406.111 32.5 406.111 33.3889C406.111 34.2778 405.333 35.0556 404.444 35.0556C398.667 35.0556 393.889 39.1667 393.889 44.1667C393.889 45.1667 393.111 45.8333 392.222 45.8333Z"
                  fill="#F99595"
                />
              </g>
            </g>
            <g id="hearts_4">
              <path
                id="Vector_23"
                className="hearts1"
                d="M391.556 259.278C398.778 259.278 405.111 263.278 407.333 269.389C407.556 269.944 408.222 270.278 409 270.167C409.667 270.389 410.444 270.056 410.667 269.389C412.889 263.389 419.222 259.278 426.444 259.278C435.556 259.278 443 265.833 443 273.833C443 276.722 442 279.611 440.111 282.056C440.111 282.056 440.111 282.056 440.111 282.167L440 282.278L409 318.833L378 282.167L377.889 282.056C376 279.611 375 276.833 375 273.833C375 265.833 382.444 259.278 391.556 259.278Z"
                fill="#F15249"
              />
              <path
                id="Vector_24"
                className="hearts1"
                d="M409 270.056C409.667 270.278 410.444 269.944 410.667 269.278C412.889 263.278 419.222 259.167 426.444 259.167C435.556 259.167 443 265.722 443 273.722C443 276.611 442 279.5 440.111 281.944C440.111 281.944 440.111 281.944 440.111 282.056L440 282.167L409 318.833"
                fill="#C93131"
              />
              <path
                id="Vector_25"
                className="hearts1"
                d="M380.222 276.833C379.333 276.833 378.556 276.056 378.556 275.167C378.556 268.278 384.778 262.722 392.444 262.722C393.333 262.722 394.111 263.5 394.111 264.389C394.111 265.278 393.333 266.056 392.444 266.056C386.667 266.056 381.889 270.167 381.889 275.167C381.889 276.167 381.111 276.833 380.222 276.833Z"
                fill="#F99595"
              />
              <g id="Frame_3">
                <path
                  id="Vector_26"
                  className="hearts1"
                  d="M391.556 259.278C398.778 259.278 405.111 263.278 407.333 269.389C407.556 269.944 408.222 270.278 409 270.167C409.667 270.389 410.444 270.056 410.667 269.389C412.889 263.389 419.222 259.278 426.444 259.278C435.556 259.278 443 265.833 443 273.833C443 276.722 442 279.611 440.111 282.056C440.111 282.056 440.111 282.056 440.111 282.167L440 282.278L409 318.833L378 282.167L377.889 282.056C376 279.611 375 276.833 375 273.833C375 265.833 382.444 259.278 391.556 259.278Z"
                  fill="#F15249"
                />
                <path
                  id="Vector_27"
                  className="hearts1"
                  d="M409 270.055C409.667 270.278 410.444 269.944 410.667 269.278C412.889 263.278 419.222 259.167 426.444 259.167C435.556 259.167 443 265.722 443 273.722C443 276.611 442 279.5 440.111 281.944C440.111 281.944 440.111 281.944 440.111 282.055L440 282.167L409 318.833"
                  fill="#C93131"
                />
                <path
                  id="Vector_28"
                  className="hearts1"
                  d="M380.222 276.833C379.333 276.833 378.556 276.056 378.556 275.167C378.556 268.278 384.778 262.722 392.444 262.722C393.333 262.722 394.111 263.5 394.111 264.389C394.111 265.278 393.333 266.056 392.444 266.056C386.667 266.056 381.889 270.167 381.889 275.167C381.889 276.167 381.111 276.833 380.222 276.833Z"
                  fill="#F99595"
                />
              </g>
            </g>
            <circle
              id="Ellipse 1"
              cx="246.5"
              cy="198.5"
              r="24.5"
              fill="#C93131"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default Motto;
