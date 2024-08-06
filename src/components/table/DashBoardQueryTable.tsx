
import * as React from "react"
import {
    CaretSortIcon,
    ChevronDownIcon,
    DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Link } from "react-router-dom"
import { store } from "@/redux/Store"
import { selectCurrentUser } from "@/redux/slices/user.slice"


function formatDate(dateStr: string): string {
    const date: Date = new Date(dateStr)
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate: string = date.toLocaleDateString('en-US', options);
    return formattedDate
}



export const columns: ColumnDef<TypeAssignment>[] = [

    {
        accessorKey: "deadline",
        header: () => {
            return (
                <div className="">Deadline</div>
            )
        },
        cell: ({ row }) => <div className="capitalize">{formatDate(row.getValue("deadline"))}</div>,
    },
    {
        accessorKey: "subject",
        header: () => <div className="">Subject</div>,
        cell: ({ row }) => {
            return <div className="font-medium">{row.getValue("subject")}</div>
        },
    },
    {
        accessorKey: "reference",
        header: () => {
            return (
                <div className="">Reference</div>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("reference")}</div>,
    }, {
        accessorKey: "phone",
        header: () => {
            return (
                <div className="">Phone</div>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("phone")}</div>,
    },
    {
        accessorKey: "type",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    type
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("type")}</div>,
    }, {
        accessorKey: "assignment_name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Assignment name
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("assignment_name")}</div>,
    },
    {
        accessorKey: "pageOrWord",
        header: () => <div className="text-right">Pages/Words</div>,
        cell: ({ row }) => {


            return <div className="text-right font-medium">{row.getValue("pageOrWord")}</div>
        },
    },
    {
        accessorKey: "file_name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    File name
                    <CaretSortIcon className="ml-2 h-4 w-4 " />
                </Button>
            )
        },
        cell: ({ row }) => {

            return <div className="text-right font-medium w-[100px] truncate">{row.getValue("file_name")}</div>
        },
    },
    {
        id: "actions",
        enableHiding: false,
        header: () => <h1>Actions</h1>,
        cell: ({ row }) => {
            const assignment = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <DotsHorizontalIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>

                        <DropdownMenuItem><Link to={`/dashboard/customer/${assignment.customer_id}/query/${assignment.id}`}>Open Query</Link></DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleFileDownload(assignment.id,assignment.file_name)}>Download Query</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleOrder(assignment.customer_id, assignment.id)}>Order</DropdownMenuItem>
                        <DropdownMenuSeparator />

                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
const handleFileDownload = async (customerID: string,fileName:string) => {
    const state = store.getState();
    const { token } = selectCurrentUser(state);
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/customer/download-query/${customerID}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        if (res.status == 400) {
            const data = await res.json();
            console.log(data)
        }
        else {
            const blob = await res.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = fileName; // You can set the file name here
            document.body.appendChild(a);
            a.click();
            a.remove();
        }
        // console.log(data)
    }
    catch (error) {
        console.log(error)
    }

}
const handleOrder = async (customerId: string, orderId: string) => {

}
export function DashBoardTable({ data }: { data: TypeAssignment[] }) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })


    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter by Assignment name..."
                    value={(table.getColumn("assignment_name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("assignment_name")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                {/* <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div> */}
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
