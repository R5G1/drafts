import { useState } from 'react';
import './style.scss';
interface IDisclosureText {
  children: React.ReactNode;
  title: string;
}
function DisclosureText({ children, title }: IDisclosureText) {
  const [click, setClick] = useState(false);
  return (
    <div>
      <div className="disclosure-text-title-conteiner" onClick={() => setClick((prev) => !prev)}>
        <p>{title}</p>
        <div
          className="disclosure-text-title-raund"
          style={click ? { transform: 'rotate(45deg)' } : { transform: 'rotate(0deg)' }}
        >
          +
        </div>
      </div>
      {click && <p className="disclosure-text">{children}</p>}
    </div>
  );
}

export default DisclosureText;
