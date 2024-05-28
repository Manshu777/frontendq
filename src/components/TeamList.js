

import TeamItem from "./TeamItem";



const TeamList = () => {
   
    return (
        <section className="section-teams">
            <div className="container">
             
                <div className="row">
                    <TeamItem/>
                    <TeamItem/>
                    <TeamItem/>
                </div>
            </div>
        </section>
    )
}

export default TeamList;