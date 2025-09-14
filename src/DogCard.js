import Image from './Image'
import Name from './Name'

function DogCard(props){ // capital letters
    let title="This ia dog card" // --? JSX curlies
    return ( // binded by only single element/parent , also use fragments <> </>
        <>
            <h2 style={{fontSize:'20px', color:'red'}}>{title} </h2>
            <Name>
                <h3>{props.name}</h3>
            </Name>
            <Image src={props.src} />
        </>
    );
}

export default DogCard;