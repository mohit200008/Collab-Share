import { useParams } from 'react-router'
import { useDocument } from '../../hooks/useDocument'
import './Project.css'
import ProjectComments from './ProjectComments'
import ProjectSummary from './ProjectSummary'


export default function Project() {
    const { id } = useParams()
    const { error, document } = useDocument('projects',id)

    if (error) {
        return <div className="error">{error}</div>
    }

    if(!document) {
        return <div className="loading">loading....</div>
    }
    return (
        <div className="project-details">
            <ProjectSummary project={document} />
            <ProjectComments project={document} />
        </div>
    )
}
