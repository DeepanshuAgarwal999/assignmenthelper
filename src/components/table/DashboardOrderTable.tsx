
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
import { Checkbox } from "@/components/ui/checkbox"
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
import { convertTimestampToDate } from "@/lib/utils"



export function formatDate(dateStr: string): string {
    const date: Date = new Date(dateStr)
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate: string = date.toLocaleDateString('en-US', options);
    return formattedDate
}
export type OrderStatus =
    "UNQUOTED" | "QUOTED" | "CREATED" | "PROCESSING" | "ASSIGNED" | "COMPLETED" | "REWORK" | "CANCELLED" | "REFUNDED";

export enum OrderTypeStatus {
    UNQUOTED = "Order not Placed",
    QUOTED = "Amount assigned to the Assignment",
    CREATED = "Order attached to assignment",
    PROCESSING = "Waiting for writer",
    ASSIGNED = "Writer accepted the assignment",
    COMPLETED = "Solution uploaded",
    REWORK = "Ask for rework if(required)",
    CANCELLED = "Assignment cancelled",
    REFUNDED = "Amount refunded",
}
export const OrderCurrentStatus = [
    OrderTypeStatus.CREATED,
    OrderTypeStatus.QUOTED,
    OrderTypeStatus.PROCESSING,
    OrderTypeStatus.ASSIGNED,
    OrderTypeStatus.COMPLETED,
    OrderTypeStatus.REWORK,
    OrderTypeStatus.CANCELLED,
    OrderTypeStatus.REFUNDED,
]

export type TypeOrderDetails = {
    amount: number,
    order_id: string,
    customer_id: string,
    query_id: string,
    customer_email: string,
    order_type: null | string,
    order_status: OrderStatus,
    re_workable: boolean,
    order_datetime: string,
    modification_datetime: null | string
}


export const columns: ColumnDef<TypeOrderDetails>[] = [
   
    {
        accessorKey: "order_datetime",
        header: () => {
            return (
                <div className="">Order date</div>
            )
        },
        cell: ({ row }) => <div className="uppercase">{convertTimestampToDate(row.getValue("order_datetime"))}</div>,
    },

    {
        accessorKey: "order_status",
        header: () => {
            return (
                <div className="">Order status</div>
            )
        },
        cell: ({ row }) => <div className="uppercase">{(row.getValue("order_status"))}</div>,
    },
    {
        accessorKey: "order_id",
        header: () => <div className="">Order ID</div>,
        cell: ({ row }) => {
            return <div className="font-medium">{row.getValue("order_id")}</div>
        },
    },
    {
        accessorKey: "amount",
        header: () => {
            return (
                <div className="">Amount</div>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("amount")}</div>,
    },



    {
        id: "actions",
        enableHiding: false,
        header: () => <h1>Actions</h1>,
        cell: ({ row }) => {
            const order = row.original
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

                        <DropdownMenuItem ><Link to={``}>Order Status</Link></DropdownMenuItem>
                        {order.re_workable && <DropdownMenuItem>Rework</DropdownMenuItem>}
                        <DropdownMenuSeparator />

                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

export function DashBoardOrderTable({ data }: { data: TypeOrderDetails[] }) {
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
