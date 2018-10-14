import css from '../css/index.css'
class PraiseButton {
  constructor() {
  }
  clickAction() {
    axios.get('/like')
      .then(function (response) {
        console.log(response+'e');
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
export default PraiseButton