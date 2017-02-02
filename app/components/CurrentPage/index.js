import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 50px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 4px;
  margin: 0 10px;
  &:focus {
    border: 1px solid #45A7B9;
  }
`;

class CurrentPage extends Component {
  state = {
    currentPage: this.props.page,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentPage: nextProps.page,
    });
  }

  handleChangeShowCurrentPage = (e) => {
    this.setState({
      currentPage: e.target.value,
    });
  }

  handleChangeCurrentPage = (e) => {
    if (e.keyCode === 13) {
      this.props.changeCurrentPage(this.state.currentPage);
    }
  }

  render() {
    return (
      <Input
        value={this.state.currentPage}
        type="text"
        onChange={this.handleChangeShowCurrentPage}
        onKeyDown={this.handleChangeCurrentPage}
        onFocus={this.handleFocusInput}
      />
    );
  }
}

CurrentPage.defaultProps = {
  page: 0,
};

CurrentPage.propTypes = {
  page: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number]
  ),
  changeCurrentPage: PropTypes.func,
};

export default CurrentPage;
