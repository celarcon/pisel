export function Alert ( { message } ){
    return(
        <div className="bg-red-100 border border-red-400 text-red-700 p-4 py-3 rounded mb-3 text-center relative">
            <span>{message}</span>
        </div>
    );
}