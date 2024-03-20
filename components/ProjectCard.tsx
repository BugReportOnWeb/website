import { Project } from "@/types/project";

type ProjectCardProps = {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <a href={project.href} className='p-4 border border-[#27272A] rounded-lg hover:bg-[#050F19]'>
            <h1 className='font-semibold text-[#ededed] mb-2 text-sm'>{project.title}</h1>
            <p className='text-sm text-[#ededed]/80 text-xs'>{project.description}</p>
        </a>
    )
}

export default ProjectCard;
