export default function arrayRemove(arr, value) {

    for( let i = 0; i < arr.length; i++){ 
        if ( arr[i] === value) {
            arr.splice(i, 1); 
          i--;
        }
    }

}
