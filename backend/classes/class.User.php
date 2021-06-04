<?php
    require_once('class.Timeline.php');

    class User implements JsonSerializable {
        private $id = 0;
        private $email = null;
        private $username = null;
        private $password = null;
        private $firstname = null;
        private $lastname = null;
        private $birthday = null;
        private $profile_picture = null;
        private $description = null;
        private $premium_account = false;

        //Association est 0..*
        private $theCreatedTimelines = array();

        /**
         * User constructor.
         * @param int $id
         * @param null $email
         * @param null $username
         * @param null $password
         * @param null $firstname
         * @param null $lastname
         * @param null $birthday
         * @param null $profile_picture
         * @param null $description
         * @param bool $premium_account
         */
        public function __construct($id, $email, $username, $password, $firstname, $lastname, $birthday, $profile_picture, $description, $premium_account)
        {
            $this->id = $id;
            $this->email = $email;
            $this->username = $username;
            $this->password = $password;
            $this->firstname = $firstname;
            $this->lastname = $lastname;
            $this->birthday = $birthday;
            $this->profile_picture = $profile_picture;
            $this->description = $description;
            $this->premium_account = $premium_account;
        }

        /**
         * @return int
         */
        public function getId()
        {
            return $this->id;
        }

        /**
         * @param int $id
         */
        public function setId($id)
        {
            $this->id = $id;
        }

        /**
         * @return null
         */
        public function getEmail()
        {
            return $this->email;
        }

        /**
         * @param null $email
         */
        public function setEmail($email)
        {
            $this->email = $email;
        }

        /**
         * @return null
         */
        public function getUsername()
        {
            return $this->username;
        }

        /**
         * @param null $username
         */
        public function setUsername($username)
        {
            $this->username = $username;
        }

        /**
         * @return null
         */
        public function getPassword()
        {
            return $this->password;
        }

        /**
         * @param null $password
         */
        public function setPassword($password)
        {
            $this->password = $password;
        }

        /**
         * @return null
         */
        public function getFirstname()
        {
            return $this->firstname;
        }

        /**
         * @param null $firstname
         */
        public function setFirstname($firstname)
        {
            $this->firstname = $firstname;
        }

        /**
         * @return null
         */
        public function getLastname()
        {
            return $this->lastname;
        }

        /**
         * @param null $lastname
         */
        public function setLastname($lastname)
        {
            $this->lastname = $lastname;
        }

        /**
         * @return null
         */
        public function getBirthday()
        {
            return $this->birthday;
        }

        /**
         * @param null $birthday
         */
        public function setBirthday($birthday)
        {
            $this->birthday = $birthday;
        }

        /**
         * @return null
         */
        public function getProfilePicture()
        {
            return $this->profile_picture;
        }

        /**
         * @param null $profile_picture
         */
        public function setProfilePicture($profile_picture)
        {
            $this->profile_picture = $profile_picture;
        }

        /**
         * @return null
         */
        public function getDescription()
        {
            return $this->description;
        }

        /**
         * @param null $description
         */
        public function setDescription($description)
        {
            $this->description = $description;
        }

        /**
         * @return bool
         */
        public function isPremiumAccount()
        {
            return $this->premium_account;
        }

        /**
         * @param bool $premium_account
         */
        public function setPremiumAccount($premium_account)
        {
            $this->premium_account = $premium_account;
        }

        /**
         * @return array
         */
        public function getTheCreatedTimelines()
        {
            return $this->theCreatedTimelines;
        }

        /**
         * @param array $theCreatedTimelines
         */
        public function setTheCreatedTimelines($theCreatedTimelines)
        {
            $this->theCreatedTimelines = $theCreatedTimelines;
        }

        public function jsonSerialize() {
            return get_object_vars($this);
        }
    }
?>