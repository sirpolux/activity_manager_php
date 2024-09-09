import Authenticated from "@/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"

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
                                    <pre>{JSON.stringify(projects,undefined,2)}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
        </Authenticated>
       
    )
}