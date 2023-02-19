import { createAction, props } from "@ngrx/store";


// export const enterNumber = createAction(
//     '[Calculator] Enter Number',
//     props<{ number: string }>()
// )

export const EnterKey = createAction(
    '[Calculator] Enter Key',
    props<{ key: string, keyType: string }>()
)

export const PrintResult = createAction(
    '[Calculator] Result',
    props<{ result: string }>()
)