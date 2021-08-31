import "./styles.css"

type Props = {
  text: string;
}

const ButtonIcon = ( {text} : Props) => {
  return(
    <div className="button-container">
      <a href="#props">{text}</a>
    </div>
  );
}

export default ButtonIcon;