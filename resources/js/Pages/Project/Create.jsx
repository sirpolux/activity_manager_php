import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Create({auth}){
    return (
        <Authenticated
        user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Projects</h2>
                    <Link
                        href={route("project.create")}
                        className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                    >
                        Create Project
                    </Link>
                </div>
            }
        >

        </Authenticated>
    )
}