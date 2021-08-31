import "./styles.css"

type Props = {
  text: string;
}

const ButtonIcon = ( {text} : Props) => {
  return(
    <div className="button-container">
      <button className="btn ">
          <h6>{text}</h6>
        </button>
    </div>
  );
}

export default ButtonIcon;