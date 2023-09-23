import jeremy from "./images/image-jeremy.png";
export function Profile({onClickDaily, onClickWeekly, onClickMonthly}) {
  return (
    <div className="profile">
      <div className=" profile-top">
        <img className="jeremy" src={jeremy} alt="Jeremy" />
        <div>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="period">
        <p onClick={onClickDaily}>Daily</p>
        <p onClick={onClickWeekly}>Weekly</p>
        <p onClick={onClickMonthly}>Monthly</p>
      </div>
    </div>
  );
}
