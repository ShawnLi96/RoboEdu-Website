export const COLUMNS = [
    {
        Header: "Camp Date",
        accessor: 'camp_date',
    },
    {
        Header: "Student",
        accessor: 'student'
    },
    
    {
        Header: "Program",
        accessor: 'program',
        Cell: e =><a href={e.value}> {e.value} </a>
    },
    
    {
        Header:   "\xA0\xA0\xA0\xA0\xA0Lunch\xA0\xA0\xA0\xA0\xA0",
        accessor: 'lunch'
    },
    
    {
        Header: "Beforecare",
        accessor: 'beforecare'
    },
    
    {
        Header: "Aftercare",
        accessor: 'aftercare'
    },

    {
        Header: "Subtotal",
        accessor: 'subtotal'
    }
]