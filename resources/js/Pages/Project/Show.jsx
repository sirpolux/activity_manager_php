import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Show({ auth, project }) {
    return (
        <Authenticated user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{`Project "${project.name}" `}</h2>}
        >
            <Head title={`Project "${project.name}"`} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div>
                            <img
                                src={project.image_path}
                                alt=""
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <div className="p-6 text-gray-900">


                            <div className="grid gap-1 grid-cols-2 mt-2">
                                <div>
                                    <div>
                                        <label className="mt-1 text-lg font-bold">Project Id</label>
                                        <p className="mt-4">{project.id}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="mt-1 text-lg font-bold">Project name</label>
                                        <p className="mt-4">{project.name}</p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="mt-1 text-lg font-bold">Project Status</label>
                                        <p className="mt-4">
                                            <span className={"px-2  py-1 rounded text-white " + PROJECT_STATUS_CLASS_MAP[project.status]}>
                                                {PROJECT_STATUS_TEXT_MAP[project.status]}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="mt-1 text-lg font-bold">Project name</label>
                                        <p className="mt-4">{project.createdBy.name}</p>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <label className="mt-1 text-lg font-bold">Due date</label>
                                        <p className="mt-4">{project.due_date}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="mt-1 text-lg font-bold">Create date</label>
                                        <p className="mt-4">{project.created_at}</p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="mt-1 text-lg font-bold">Updated by</label>
                                        <p className="mt-4">{project.updatedBy.name}</p>
                                    </div>

                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="mt-1 text-lg font-bold">Project description</label>
                                <p className="mt-4">{project.description}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}