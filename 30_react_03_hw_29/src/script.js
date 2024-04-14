const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const animals = [
  { type: `turtle`, icon: `🐢`, id: 1 },
  { type: `octopus`, icon: `🐙`, id: 2 },
  { type: `fish`, icon: `🐠`, id: 3 },
  { type: `flamingo`, icon: `🦩`, id: 4 },
  { type: `penguin`, icon: `🐧`, id: 5 },
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

class Table extends React.Component {
  constructor(props) {
    super(props);

    const activeItem = setInterval(() => {
      let randomIndex = getRandomInt(0, this.state.listIndex.length);
      let randomItem = this.state.listIndex[randomIndex];

      this.state.list[randomItem].active = true;
      this.state.listIndex.splice(randomIndex, 1);

      if (!this.state.listIndex.length) {
        clearInterval(activeItem);
        this.state.borderWidth = '20px';
      }

      if (
        this.state.listIndex.length === Math.floor(this.state.list.length / 2)
      ) {
        this.state.borderWidth = '10px';
      }

      this.setState({});
    }, 1000);
  }

  state = {
    list: this.props.list,
    styleItem: {},
    listIndex: Object.keys(this.props.list),
    borderWidth: 0,
  };

  render() {
    console.log(this);
    return (
      <table style={{ borderWidth: this.state.borderWidth }}>
        <tbody>
          {this.state.list.map((item) => (
            <tr
              style={item.active && { color: `green`, fontWeight: `bold` }}
              key={item.id}
            >
              <td>{item.type}</td>
              <td>{item.icon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

root.render(<Table list={animals} />);
