import Pagination from "@/Components/Pagination"
import SelectInput from "@/Components/SelectInput"
import TextInput from "@/Components/TextInput"
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants"
import Authenticated from "@/Layouts/AuthenticatedLayout"
import { Head, Link } from "@inertiajs/react"

export default function Index({auth,projects}){
    return (
        <Authenticated
            user={auth.user}
                    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Projects</h2>}
            >
                    <Head title="Projects" />

                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    <table className="w-full text-sm">
                                        <thead className="text-xs text-gray-700 uppercase">
                                            <tr className="text-nowrap bg-gray-500">
                                                <th className="px-3 py-2">ID</th>
                                                <th className="px-3 py-2">Image</th>
                                                <th className="px-3 py-2">Name</th>
                                                <th className="px-3 py-2">Status</th>
                                                <th className="px-3 py-2">Create Date</th>
                                                <th className="px-3 py-2">Due date</th>
                                                <th className="px-3 py-2">Created by</th>
                                                <th className="px-3 py-2">Actions</th>
                                            </tr>
                                        </thead>
                                        <thead className="text-xs text-gray-700 uppercase">
                                            <tr className="text-nowrap bg-gray-500">
                                                <th className="px-3 py-2"></th>
                                                <th className="px-3 py-2"></th>
                                                <th className="px-3 py-2">
                                                    <TextInput className="w-full" placeholder="Project name" />
                                                </th>
                                                <th className="px-3 py-2">
                                                    <SelectInput  className="w-full" /> 
                                                    </th>
                                                <th className="px-3 py-2"></th>
                                                <th className="px-3 py-2"></th>
                                                <th className="px-3 py-2"></th>
                                                <th className="px-3 py-2"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {projects.data.map((project)=>(
                                                <tr key={project.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th className="px-3 py-2">{project.id}</th>
                                                    <td className="px-3 py-2">
                                                        <img src={project.image_path} alt="" style={{width:60}} />
                                                    </td>
                                                    <td className="px-3 py-2">{project.name}</td>
                                                    <td className="px-3 py-2"><span className={"px-2 py-1 rounded text-white "+ PROJECT_STATUS_CLASS_MAP[project.status]}> {PROJECT_STATUS_TEXT_MAP[project.status]}</span></td>
                                                    <td className="px-3 py-2">{project.created_at}</td>
                                                    <td className="px-3 py-2">{project.due_date}</td>
                                                    <td className="px-3 py-2">{project.createdBy.name}</td>
                                                    <td className="px-3 py-2">
                                                        <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"  href={route('project.edit',project.id)}>
                                                            Edit
                                                        </Link>
                                                        <Link className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"  href={route('project.destroy',project.id)}>
                                                            Delete
                                                        </Link>
                                                    </td>
                                                 

                                                </tr> 
                                            ))}
                                          
                                        </tbody>
                                    </table>
                                    {/* <pre>
                                        {JSON.stringify(projects, undefined, 2)}
                                    </pre> */}
                                    <Pagination links={projects.meta.links} />
                                </div>
                            </div>
                        </div>
                    </div>
        </Authenticated>
       
    )
}