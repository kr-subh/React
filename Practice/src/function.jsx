function App(){
    let contest;
    const isLoggedIn=true;
    if(isLoggedIn){
       contest= <Admin/>
    }

    else{
        contest =<Form/>
    }

    return(
        <div>
        {contest};

        </div>

    )
}

const userdata = user.filter((element)=>{
    if(user.experience=>2)
})


function book(){
    const[available, setAvailable]=useState(true);

    const togglerStatus=()=>{
        setAvailable(!available);
    }
}
