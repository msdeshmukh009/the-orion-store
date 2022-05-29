const Modal = ({ children, parameter }) => {
  return (
    <div className={parameter ? "modal-background flex-total-center" : "modal-background"}>
      <div>{children}</div>
    </div>
  );
};
export { Modal };
