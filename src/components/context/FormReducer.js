import
 { 
    FORM_VALIDATION
} from '../../types'
export default (state, action) =>{
    switch (state, action) {
    case FORM_VALIDATION:
        return{
            ...state,
            formError: true,

        }
        
        break;

    default:
        break;
}
}
