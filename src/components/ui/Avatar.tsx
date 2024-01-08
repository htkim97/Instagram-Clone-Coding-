
type Props = {
    image?:string | null;
    size?: 'small' | 'normal';
    highlight? : boolean;
}

export default function Avatar({
  image,
  size = 'normal',
  highlight = false
}:Props) {


  return(
    <div className={getContainerStyle(size, highlight)}>
        <img 
        className={`rounded-full bg-white ${getImageStyle(size)}`}
        alt="user Profile" 
        src={image ?? undefined}
        referrerPolicy = 'no-referrer'
        />
    </div>
  )
  
}

// `w-9 h-9 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300`

function getContainerStyle(size:string, highlight:boolean):string{
  const base = 'rounded-full flex justify-center items-center';
  const highlightStyle = highlight? 'bg-gradient-to-bl from-violet-300 via-violet-400 to-violet-500' : '';
  const sizeStyle = size ==='small'? 'w-9 h-9 ' : 'w-[68px] h-[68px]';
  return `${base} ${highlightStyle} ${sizeStyle}`

}

function getImageStyle(size:string):string{
  return size === 'small'? 'w-[34px] h-[34px] p-[0.1rem]' : 'w-16 h-16 p-[0.2rem]'
}