const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      '👍🏼 ( by React )',
    );
  }
}

export const renderLikeButton = () => {
  document.querySelectorAll('#react_button').forEach((domContainer) => {
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    const root = ReactDOM.createRoot(domContainer);
    root.render(e(LikeButton, { commentID: commentID }));
  });
};
