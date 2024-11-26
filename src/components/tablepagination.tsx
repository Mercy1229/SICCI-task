import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  export default function TablePagination(){
    return(
        <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="/dashboard/hall" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/master-table/users">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/master-table/roles">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/master-table/loan-types">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/master-table/arbitrator">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/master-table/customers">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/master-table/hall-table">6</PaginationLink>
          </PaginationItem>
          {/* <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem> */}
          <PaginationItem>
            <PaginationNext href="/reports/iaa-reports"/>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
}