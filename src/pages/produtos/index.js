import React from "react";
import { Table } from "../../components/table";
class Produtos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    let page = this.props.match.params.page;
    return (
      <div>
        <Table
          data={() => {
            "lol";
          }}
        />
        <h1>{page}</h1>
      </div>
    );
  }
}
export default Produtos;
