import React from 'react'

const Subscribe = () => {
    return (
        <div id="news-subscribe-bg">
            <div className="container">

                <div id="sub-container">
                    <div id="sub-header">
                        <h1>Don't Want to Miss Anything?</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="68" viewBox="0 0 65 68" fill="none">
                            <path
                                d="M53.9527 51.0013C62.3487 40.4345 55.9829 24.9879 42.2046 24.2502C41.5147 24.1855 40.7434 24.2517 40.0788 24.2932C40.2031 33.3394 35.9074 43.1829 28.517 45.6747C21.8475 47.888 18.1833 41.4522 20.9357 35.9987C24.2323 29.5232 30.0387 24.1482 37.1035 22.1798C36.5381 16.4845 33.7599 11.4126 27.6185 9.69459C17.2678 6.82046 6.49364 16.3682 4.98841 26.127C4.89565 27.1568 3.30272 27.0767 3.39548 26.047C3.98732 12.914 19.7395 2.55218 31.9628 8.57876C36.6881 10.9601 39.2277 15.9751 39.8996 21.6457C47.3233 20.7147 54.415 25.014 58.2418 31.1879C62.6406 38.3502 60.6002 46.3281 55.6096 52.2988C54.827 53.264 53.2765 51.9415 53.9527 51.0013ZM26.7754 32.1846C24.8343 34.4257 22.6994 37.2717 22.4212 40.361C22.1176 43.3439 26.1813 43.4135 27.9117 43.1255C30.0685 42.7392 31.6338 40.809 32.798 39.0836C35.4208 35.4527 37.1637 30.0084 37.2824 24.8273C33.2016 26.1063 29.631 29.06 26.7754 32.1846Z"
                                fill="#6366F1"/>
                            <path
                                d="M51.4065 57.7766C50.7004 54.8028 50.1822 51.6735 50.2474 48.6336C50.2897 47.3916 52.0144 47.5531 52.0787 48.7708C52.2071 51.2059 52.8937 53.624 53.5551 55.9359C54.9152 55.5096 56.382 55.0587 57.717 54.5262C58.7323 54.0675 60.1543 52.9547 61.3714 53.3457C61.9801 53.5411 62.1061 54.0722 62.0189 54.6525C61.7887 56.0501 59.5506 56.5672 58.4288 57.0505C56.5859 57.8124 54.7995 58.337 52.8811 58.7803C52.242 58.9279 51.5578 58.4138 51.4065 57.7766Z"
                                fill="#6366F1"/>
                        </svg>
                    </div>

                    <div className="news-sub-form">
                        <div>
                            <h5>Sign up for newsletters</h5>
                        </div>

                        <div>
                            <div className="news-subscription">
                                <input type="checkbox"/>
                                <p>Daily NewsLetter</p>
                            </div>

                            <div className="news-subscription">
                                <input type="checkbox"/>
                                <p>Event Updates</p>
                            </div>
                        </div>

                        <div>
                            <div className="news-subscription">
                                <input type="checkbox"/>
                                <p>Advertising Updates</p>
                            </div>

                            <div className="news-subscription">
                                <input type="checkbox"/>
                                <p>Startups Weekly</p>
                            </div>
                        </div>

                        <div>
                            <div className="news-subscription">
                                <input type="checkbox"/>
                                <p>Week in Review</p>
                            </div>

                            <div className="news-subscription">
                                <input type="checkbox"/>
                                <p>Podcasts</p>
                            </div>
                        </div>

                    </div>
                    <div className="news-subscription">
                        <div>
                            <input type="text"/>
                            <button className="primary-button"><span>Subscribe *</span></button>
                        </div>
                        <p>*Yes, I agree to the <a href="#">terms</a> and <a href="#">privacy policy</a></p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Subscribe
