const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(
  ".modal__close-button"
);
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);
const editProfileForm = editProfileModal.querySelector(".modal__form");

const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-button");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const newPostForm = newPostModal.querySelector(".modal__form");
const cardDescriptionInput = newPostModal.querySelector(
  "#card-description-input"
);
const cardImageInput = newPostModal.querySelector("#card-image-input");

function openModal(modal) {
    modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
    modal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", function () {
    closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function () {
    openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
    closeModal(newPostModal);
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(newPostModal);
  evt.target.reset();
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log(cardDescriptionInput.value);
  console.log(cardImageInput.value);
  closeModal(newPostModal);
  evt.target.reset();
}

newPostForm.addEventListener("submit", handleNewPostSubmit);
