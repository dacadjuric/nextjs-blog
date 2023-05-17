
function Header({title}) {
  console.log(title + ' logovano');

  return (
    <button >{title ? title : 'Default title'}</button>
  )

}

export default Header;