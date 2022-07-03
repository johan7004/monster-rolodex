import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/searchbox/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  const onSearchText = (event) => {
    const searchWord = event.target.value;
    console.log(searchWord);
    setSearchField(searchWord);
  };

  useEffect(() => {
    const filter = users.filter((user) => {
      return user.name.toLowerCase().includes(searchField);
    });

    setFilteredUsers(filter);
    
  }, [users, searchField]);

  return (
    <div>
      <header className="App-header">
        <h1>Monster Rolodex</h1>
        <SearchBox onChangeHandler={onSearchText} placeholder="Search" />
        <CardList usersName={filteredUsers} />
      </header>
    </div>
  );
};
export default App;

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       users: [],
//       searchField: "",
//     };

//     this.onSearchText = this.onSearchText.bind(this);
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return {
//               users: users,
//             };
//           },
//           () => {
//             console.log(this.state.users);
//           }
//         )
//       );
//   }

//   onSearchText(event) {
//     const searchField = event.target.value;

//     console.log(searchField);

//     this.setState({ searchField: searchField });
//   }

//   render() {
//     const { users, searchField } = this.state;
//     const { onSearchText } = this;

//     const filteredUsers = users.filter((user) => {
//       return user.name.toLowerCase().includes(searchField);
//     });
//     return (
//       <div>
//         <header className="App-header">
//           <h1>Monster Rolodex</h1>
//           <SearchBox onChangeHandler={onSearchText} placeholder="Search" />
//           <CardList usersName={filteredUsers} />
//         </header>
//       </div>
//     );
//   }
// }
