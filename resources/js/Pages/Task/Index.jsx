import Pagination from "@/Components/Pagination"
import SelectInput from "@/Components/SelectInput"
import TextInput from "@/Components/TextInput"
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants"
import Authenticated from "@/Layouts/AuthenticatedLayout"
import { Head, Link, router } from "@inertiajs/react"
import TableHeading from "@/Components/TableHeading"
import TaskTable from "./TaskTable"



export default function Index({auth,tasks, queryParams=null}){
    queryParams = queryParams || {};
    const searchFieldChanged=(name, value)=>{
        if(value){
            queryParams[name]= value
        }else{
            delete queryParams[name]
        }

        router.get(route('task.index'), queryParams);
    }

    const onKeyPress = (name, e)=>{
        if(e.key !== 'Enter') return;
        searchFieldChanged(name, e.target.value)
    }

    const sortChange=(name)=>{
        if (name === queryParams.sort_field){
            if(queryParams.sort_direction==="asc"){
                queryParams.sort_direction="desc";
            }else{
                queryParams.sort_direction="asc"
            }
        }else{
            queryParams.sort_field=name;
            queryParams.sort_direction="asc";
        }
        router.get(route("task.index"), queryParams);
    }

    return (
        <Authenticated
            user={auth.user}
                    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tasks</h2>}
                    >
                    <Head title="Tasks" />

                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white shadow-sm sm:rounded-lg">
                              <TaskTable 
                                tasks={tasks}
                                queryParams={queryParams}
                                sortChange={sortChange}
                                onKeyPress={onKeyPress}
                                searchFieldChanged={searchFieldChanged}
                              />

                            </div>
                        </div>
                    </div>
        </Authenticated>
       
    )
}