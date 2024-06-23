import './Button.css';

type TitleProps = {
  nameButton: string,
  onClickFunction: () => void,
  disabled?: boolean,
}

const Button = ({nameButton, onClickFunction, disabled = false}: TitleProps) => {
  return (
    <button className="Button" onClick={onClickFunction} disabled={disabled}>
      {nameButton}
    </button>
  )
}

export default Button;
