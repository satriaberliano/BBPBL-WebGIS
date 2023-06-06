import React from "react";
import FacilityItem from "./FacilityItem";

function FacilityList({ facilities, searchTerm }) {
  // let items = [
  //   "Fasilitas 1",
  //   "Fasilitas 2",
  //   "Fasilitas 3",
  //   "Fasilitas 4",
  //   "Fasilitas 5",
  //   "Fasilitas 6",
  // ];

  // let facilityList = items.map((facilityTitle, index) => {
  //   return <FacilityItem key={index} facilityTitle={facilityTitle} />;
  // });

  // return <div className="facility-list">{facilityList}</div>;

  // const [length, setLength] = useState(0);

  // useEffect(() => {
  //   setLength(facilities.length);
  //   console.log(length);
  // }, [facilities.length, length]);

  return (
    <div className="facility-list">
      {facilities
        .filter((value) => {
          if (searchTerm === "") {
            return value;
          } else if (
            value.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return value;
          }
          return null;
        })
        .map(({ title, desc }, index) => {
          return (
            <FacilityItem
              key={index}
              facilityTitle={title}
              facilityDesc={desc}
            />
          );
        })}
    </div>
  );
}

export default FacilityList;
