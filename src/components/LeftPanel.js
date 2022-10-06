import "./LeftPanel.css";
import { useState } from "react";
const LeftPanel = () => {
  const [leftsidebtn, setleftButton] = useState(5);
  const getClassName = (val) => (val === leftsidebtn ? "active1" : "");
  return (
    <>
    
      <div className="main-conatiner">
        <div className="">
          <div className="sidebar">
            <div id="myDIV">
              <div id="mymain">
                <div>
                  <i
                    color="content-color-primary"
                    class="IconWrapper__IconContainer-gnjn48-0 fHTjrY"
                    title=""
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1ZM6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4Z"
                        fill="#6B6B6B"
                      ></path>
                      <path
                        d="M3 13.7308C3 12.2499 3.53343 11.2189 4.38261 10.5456C5.24878 9.85889 6.50061 9.5 8 9.5C9.49939 9.5 10.7512 9.85889 11.6174 10.5456C12.4666 11.2189 13 12.2499 13 13.7308V15H14V13.7308C14 11.9809 13.3541 10.6465 12.2387 9.76205C11.1402 8.89111 9.64203 8.5 8 8.5C6.35797 8.5 4.85981 8.89111 3.76133 9.76205C2.64586 10.6465 2 11.9809 2 13.7308V15H3V13.7308Z"
                        fill="#6B6B6B"
                      ></path>
                    </svg>
                  </i>
                </div>
                <div
                  style={{
                    fontFamily: "DM Sans",
                    fontWeight: 400,
                    color: "black",
                  }}
                >
                  My workspace
                </div>

                <div
                  style={{
                    marginLeft: 120,
                    marginTop: -7,
                    fontFamily: "DM Sans",
                  }}
                >
                  <p className="new_button">New</p>
                </div>
                <div
                  style={{
                    marginLeft: 1,
                    marginTop: -7,
                    fontFamily: "DM Sans",
                  }}
                >
                  <p className="new_button">import</p>
                </div>
              </div>
            </div>

            <div className="left-side">
              <div id="main2">
                <div
                  className={`box ${getClassName(1)}`}
                  onClick={() => setleftButton(1)}
                >
                  <i>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15 13.5C15 14.3284 14.3284 15 13.5 15H2.5C1.67157 15 1 14.3284 1 13.5V2.5C1 1.67157 1.67157 1 2.5 1H13.5C14.3284 1 15 1.67157 15 2.5V13.5ZM2 2.5C2 2.22386 2.22386 2 2.5 2H5.04623C5.19041 2 5.32758 2.06224 5.42252 2.17075L8.62371 5.82925C8.71866 5.93776 8.85582 6 9 6H13.5C13.7761 6 14 6.22386 14 6.5V13.5C14 13.7761 13.7761 14 13.5 14H2.5C2.22386 14 2 13.7761 2 13.5V2.5ZM14 5.08535V2.5C14 2.22386 13.7761 2 13.5 2H6.60188L9.22688 5H13.5C13.6753 5 13.8436 5.03008 14 5.08535Z"
                        fill="#6B6B6B"
                      ></path>
                    </svg>
                  </i>
                  <p className="collection">Collections</p>
                </div>
                <div
                  className={`box ${getClassName(2)}`}
                  onClick={() => setleftButton(2)}
                >
                  <i>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.00008 1L11.0312 2.75V6.25L8.00008 8L4.96899 6.25V2.75L8.00008 1ZM5.96899 3.32735L8.00008 2.1547L10.0312 3.32735V5.67265L8.00008 6.8453L5.96899 5.67265V3.32735Z"
                        fill="#6B6B6B"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.03117 9.75L4.00008 8L0.968994 9.75V13.25L4.00008 15L7.03117 13.25V9.75ZM4.00008 9.1547L1.96899 10.3274V12.6726L4.00008 13.8453L6.03117 12.6726V10.3274L4.00008 9.1547Z"
                        fill="#6B6B6B"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.0312 9.75L12.0001 8L8.96899 9.75V13.25L12.0001 15L15.0312 13.25V9.75ZM12.0001 9.1547L9.96899 10.3274V12.6726L12.0001 13.8453L14.0312 12.6726V10.3274L12.0001 9.1547Z"
                        fill="#6B6B6B"
                      ></path>
                    </svg>
                  </i>
                  <p className="api-text">API's</p>
                </div>
                <div
                  className={`box ${getClassName(3)}`}
                  onClick={() => setleftButton(3)}
                >
                  <i>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 2.5C1 1.67157 1.67157 1 2.5 1H13.5C14.3284 1 15 1.67157 15 2.5V10H14V2.5C14 2.22386 13.7761 2 13.5 2H2.5C2.22386 2 2 2.22386 2 2.5V13.5C2 13.7761 2.22386 14 2.5 14H10V15H2.5C1.67157 15 1 14.3284 1 13.5V2.5Z"
                        fill="#6B6B6B"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 6.5C5 6.22386 5.22386 6 5.5 6H10.5C10.7761 6 11 6.22386 11 6.5V9.5C11 9.77614 10.7761 10 10.5 10H5.5C5.22386 10 5 9.77614 5 9.5V6.5ZM6 7V9H10V7H6Z"
                        fill="#6B6B6B"
                      ></path>
                      <path d="M15 12H12V15H15V12Z" fill="#6B6B6B"></path>
                    </svg>
                  </i>
                  <p className="environment-text">Enviorments</p>
                </div>
                <div
                  className={`box ${getClassName(4)}`}
                  onClick={() => setleftButton(4)}
                >
                  <i>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 9C14 9.55228 13.5523 10 13 10C12.4477 10 12 9.55228 12 9C12 8.44772 12.4477 8 13 8C13.5523 8 14 8.44772 14 9Z"
                        fill="#6B6B6B"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.99993 2C2.82753 2 2.6673 2.08881 2.57593 2.235L0.0768851 6.23347C0.0281831 6.31062 0 6.40202 0 6.5V13.5C0 13.7761 0.223858 14 0.5 14H15.5C15.7761 14 16 13.7761 16 13.5V6.5C16 6.39874 15.9699 6.30452 15.9182 6.22578L13.4239 2.235C13.3326 2.08881 13.1723 2 12.9999 2H2.99993ZM14.5978 6L12.7228 3H3.27705L1.40205 6H14.5978ZM1 13V7H15V13H7V10H6V13H5V10H4V13H3V10H2V13H1Z"
                        fill="#6B6B6B"
                      ></path>
                    </svg>
                  </i>
                  <p className="mockserver-text">Mock Servers</p>
                </div>
                <div
                  className={`box ${getClassName(5)}`}
                  onClick={() => setleftButton(5)}
                >
                  <i>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.21667 4.57051C6.14147 4.37499 5.95237 4.24708 5.74291 4.25005C5.53345 4.25302 5.34804 4.38625 5.27842 4.58383L4.07463 8H3V9H4.42857C4.64065 9 4.82966 8.8662 4.90015 8.66618L5.77052 6.1962L7.78333 11.4295C7.85362 11.6123 8.02414 11.7372 8.2196 11.7491C8.41506 11.761 8.59948 11.6577 8.69144 11.4848L10.506 8.07341L11.1327 9.21983C11.2204 9.38024 11.3886 9.48 11.5714 9.48H13V8.48H11.8679L10.9387 6.78017C10.8506 6.61887 10.681 6.51896 10.4971 6.52001C10.3133 6.52106 10.1449 6.6229 10.0586 6.78519L8.32324 10.0476L6.21667 4.57051Z"
                        fill="#6B6B6B"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.5 1C1.67157 1 1 1.67157 1 2.5V13.5C1 14.3284 1.67157 15 2.5 15H13.5C14.3284 15 15 14.3284 15 13.5V2.5C15 1.67157 14.3284 1 13.5 1H2.5ZM2 2.5C2 2.22386 2.22386 2 2.5 2H13.5C13.7761 2 14 2.22386 14 2.5V13.5C14 13.7761 13.7761 14 13.5 14H2.5C2.22386 14 2 13.7761 2 13.5V2.5Z"
                        fill="#6B6B6B"
                      ></path>
                    </svg>
                  </i>
                  <p className="monitor-text">Monitors</p>
                </div>
                <div
                  className={`box ${getClassName(6)}`}
                  onClick={() => setleftButton(6)}
                >
                  <i>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 2C5.68629 2 3 4.68629 3 8C3 8.09598 3.00225 8.19141 3.0067 8.28623L4.14648 7.14645L4.85359 7.85355L2.50004 10.2071L0.146484 7.85355L0.853591 7.14645L2.00628 8.29914C2.00211 8.19992 2 8.1002 2 8C2 4.13401 5.13401 1 9 1C12.866 1 16 4.13401 16 8C16 11.866 12.866 15 9 15C7.37595 15 5.87982 14.4463 4.69205 13.5178L5.30795 12.7299C6.32611 13.5259 7.60699 14 9 14C12.3137 14 15 11.3137 15 8C15 4.68629 12.3137 2 9 2Z"
                        fill="#6B6B6B"
                      ></path>
                      <path
                        d="M9 4H8V8.7831L10.7428 10.4287L11.2572 9.57125L9 8.2169V4Z"
                        fill="#6B6B6B"
                      ></path>
                    </svg>
                  </i>
                  <p className="history-text">History</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftPanel;
