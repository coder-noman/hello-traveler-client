import { useEffect, useState } from 'react';
import HomePackageCard from '../HomePackageCard/HomePackageCard';

const HomePackage = () => {
    const [Packages, setPackages] = useState([]);
    useEffect(()=>{
        fetch('https://quiet-taiga-26650.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setPackages(data))
    },[])
    return (
        <div>
            <h1 className="text-center fw-bold pt-5 mb-5">Our Travel<span className="text-primary"> Packages</span></h1>
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                        {
                            Packages.map(Package => <HomePackageCard key={Package._id} Package={Package} ></HomePackageCard>)
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HomePackage;