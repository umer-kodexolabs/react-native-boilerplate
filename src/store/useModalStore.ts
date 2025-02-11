// import {MODAL_TYPES} from '@/utils';
// import {create} from 'zustand';

// const {CREATE_GOAL, FEATURE_UNAVAILABLE, UPLOAD_WORKPLACE_FILES} = MODAL_TYPES;

// type ModalStateVariables = {
//   type:
//     | typeof CREATE_GOAL
//     | typeof FEATURE_UNAVAILABLE
//     | typeof UPLOAD_WORKPLACE_FILES;
//   props?: any;
// };

// type State = {
//   currentModal?: ModalStateVariables['type'];
//   modalProps?: ModalStateVariables['props'];
// };

// type Actions = {
//   openModal: (data: ModalStateVariables) => void;
//   closeModal: () => void;
// };

// const useModalStore = create<State & Actions>(set => ({
//   currentModal: undefined,
//   modalProps: undefined,

//   closeModal: () =>
//     set({
//       currentModal: undefined,
//       modalProps: undefined,
//     }),
//   openModal: data =>
//     set({
//       currentModal: data.type,
//       modalProps: data.props,
//     }),
// }));

// export type {ModalStateVariables};
// export {useModalStore};
