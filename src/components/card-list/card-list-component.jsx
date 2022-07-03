import React from "react";

const CardList = (props) => {
  return (
    <div>
      {props.usersName.map((data, i) => {
        return <p key={i}>{data.name}</p>;
      })}
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     const { usersName } = this.props;
//     return (
//       <div>
//         {usersName.map((data, i) => {
//           return <p key={i}>{data.name}</p>;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
