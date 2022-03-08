type Props = {
  type: string;
  className?: string;
  onClick?: () => void;
};

export default ({ type, className, onClick }: Props): JSX.Element => (
  <svg className={`icon ${ className}`} aria-hidden="true" onClick={onClick}>
    <use xlinkHref={`#${type}`} />
  </svg>  
);
