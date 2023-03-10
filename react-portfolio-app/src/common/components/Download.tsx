import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  background-color: #333;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #555;
  }

  &:focus {
    outline: none;
  }
`;

const DownloadButton = () => {
  const handleClick = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/my-cv.pdf';
    link.download = 'my-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleClick}>
      <i className='fa fa-download' aria-hidden='true'></i> Download CV
    </Button>
  );
};

export default DownloadButton;
