import { useEffect } from "react";

type ModalContentProps = {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

const ModalContent = ({ onClose }: ModalContentProps) => {

  useEffect(() => {
    console.log('Modal window created');
    return () => {
      console.log('Modal window deleted');
    }
  }, [])


  return (
    <div className="modal">
      <div>I'm a modal dialog</div>
      <button onClick={onClose} id='button-close'>x</button>
    </div>
  );

}

export default ModalContent;