import Image from 'next/image'



const MyImage = (props) => {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      className={props.className}
    />
  )
}

export default MyImage;