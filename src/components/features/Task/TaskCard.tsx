import styled from 'styled-components';
const TaskContainer = styled.div`
	width: calc(100% - 20px);
	background-color: grey;
	padding: 10px;
    margin-bottom: 10px
	`

const TaskID = styled.h3`
    color: #333;     
    font-size: 24px;       
    margin-bottom: 16px;   
    text-align: center;
	`

const TaskName = styled.p`
    color: #333;     
    font-size: 24px;       
    margin-bottom: 16px;   
    text-align: center;
	`

const TaskUser = styled.p`
    color: #333;     
    font-size: 20px;       
    margin-bottom: 16px;   
    text-align: center;
	`

const TaskCard = ({id, name, user}) => {
    return (
        <TaskContainer>
            <TaskID>
                {`Task${id}`}
            </TaskID>
            <TaskName>
                {name}
            </TaskName>
            <TaskUser>
                {user}
            </TaskUser>
        </TaskContainer>
       
    ) 
}

export default TaskCard