import Pagination from "@/Components/Pagination"
import SelectInput from "@/Components/SelectInput"
import TextInput from "@/Components/TextInput"
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants"
import Authenticated from "@/Layouts/AuthenticatedLayout"
import { Head, Link, router } from "@inertiajs/react"
import TableHeading from "@/Components/TableHeading"



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
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    <table className="w-full text-sm">
                                        <thead className="text-xs text-gray-700 uppercase">
                                            <tr className="text-nowrap bg-gray-500">
                                                <TableHeading
                                                    name="id"
                                                    sort_field={queryParams.sort_field}
                                                    sort_direction={queryParams.sort_direction}
                                                    sortChange={sortChange}
                                                >
                                                    ID
                                                </TableHeading>
                                                <th className="px-3 py-2">Image</th>
                                                <TableHeading
                                                    name="name"
                                                    sort_field={queryParams.sort_field}
                                                    sort_direction={queryParams.sort_direction}
                                                    sortChange={sortChange}
                                                >
                                                    Name
                                                </TableHeading>
                                                <TableHeading
                                                    name="status"
                                                    sort_field={queryParams.sort_field}
                                                    sort_direction={queryParams.sort_direction}
                                                    sortChange={sortChange}
                                                >
                                                    Status
                                                </TableHeading> 
                                                <th className="" onClick={(e)=>sortChange('create_date')}>
                                                <div className="px-3 py-2 flex items-center justify-between gap-1 cursor-pointer">
                                                           Create date
                                                        <div>
                                                            <ChevronUpIcon className="w-4"/>
                                                            <ChevronDownIcon className="w-4 -mt-2"/>
                                                        </div>   
                                                    </div>
                                                </th>
                                                <th className="px-3 py-2"onClick={(e)=>sortChange('due_day')} >Due date</th>
                                                <th className="px-3 py-2">Created by</th>
                                                <th className="px-3 py-2">Actions</th>
                                            </tr>
                                        </thead>
                                        <thead className="text-xs text-gray-700 uppercase">
                                            <tr className="text-nowrap bg-gray-500">
                                                <th className="px-3 py-2"></th>
                                                <th className="px-3 py-2"></th>
                                                <th className="px-3 py-2">
                                                    <TextInput className="w-full" placeholder="Task name" 
                                                    onBlur={e=>searchFieldChanged('name', e.target.value)}
                                                    defaultValue={queryParams.name}
                                                    onKeyPress={e=>onKeyPress('name', e) }
                                                    />
                                                </th>
                                                <th className="px-3 py-2">
                                                    <SelectInput  
                                                        className="w-full" 
                                                        onChange={e=>searchFieldChanged('status',e.target.value)}
                                                        defaultValue={queryParams.status}
                                                        >
                                                        <option value="">Select status</option>
                                                        <option value="pending">Pending</option>
                                                        <option value="in_progress">In Progress</option>
                                                        <option value="completed">Completed</option>
                                                    </SelectInput>

                                                    </th>
                                                <th className="px-3 py-2"></th>
                                                <th className="px-3 py-2"></th>
                                                <th className="px-3 py-2"></th>
                                                <th className="px-3 py-2"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tasks.data.map((task)=>(
                                                <tr key={task.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th className="px-3 py-2">{task.id}</th>
                                                    <td className="px-3 py-2">
                                                        <img src={task.image_path} alt="" style={{width:60}} />
                                                    </td>
                                                    <td className="px-3 py-2">{task.name}</td>
                                                    <td className="px-3 py-2"><span className={"px-2 py-1 rounded text-white "+ TASK_STATUS_CLASS_MAP[task.status]}> {TASK_STATUS_TEXT_MAP[task.status]}</span></td>
                                                    <td className="px-3 py-2">{task.created_at}</td>
                                                    <td className="px-3 py-2">{task.due_date}</td>
                                                    <td className="px-3 py-2">{task.createdBy.name}</td>
                                                    <td className="px-3 py-2">
                                                        <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"  href={route('task.edit',task.id)}>
                                                            Edit
                                                        </Link>
                                                        <Link className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"  href={route('task.destroy',task.id)}>
                                                            Delete
                                                        </Link>
                                                    </td>
                                                 

                                                </tr> 
                                            ))}
                                          
                                        </tbody>
                                    </table>
                                    {/* <pre>
                                        {JSON.stringify(tasks, undefined, 2)}
                                    </pre> */}
                                    <Pagination links={tasks.meta.links} />
                                </div>
                            </div>
                        </div>
                    </div>
        </Authenticated>
       
    )
}