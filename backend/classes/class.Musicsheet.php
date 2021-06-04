<?php
    require_once('class.Timeline.php');

    class Musicsheet implements JsonSerializable {
        private $id = 0;
        private $title = null;
        private $description = null;
        private $cover_picture = null;
        private $creation_date = null;
        private $song = null;

        //Association est 1..*
        private $theTimelines = array();

        /**
         * Musicsheet constructor.
         * @param int $id
         * @param null $title
         * @param null $description
         * @param null $cover_picture
         * @param null $creation_date
         * @param null $song
         */
        public function __construct($id, $title, $description, $cover_picture, $creation_date, $song)
        {
            $this->id = $id;
            $this->title = $title;
            $this->description = $description;
            $this->cover_picture = $cover_picture;
            $this->creation_date = $creation_date;
            $this->song = $song;
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
        public function getTitle()
        {
            return $this->title;
        }

        /**
         * @param null $title
         */
        public function setTitle($title)
        {
            $this->title = $title;
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
         * @return null
         */
        public function getCoverPicture()
        {
            return $this->cover_picture;
        }

        /**
         * @param null $cover_picture
         */
        public function setCoverPicture($cover_picture)
        {
            $this->cover_picture = $cover_picture;
        }

        /**
         * @return null
         */
        public function getCreationDate()
        {
            return $this->creation_date;
        }

        /**
         * @param null $creation_date
         */
        public function setCreationDate($creation_date)
        {
            $this->creation_date = $creation_date;
        }

        /**
         * @return null
         */
        public function getSong()
        {
            return $this->song;
        }

        /**
         * @param null $song
         */
        public function setSong($song)
        {
            $this->song = $song;
        }

        /**
         * @return array
         */
        public function getTheTimelines()
        {
            return $this->theTimelines;
        }

        /**
         * @param array $theTimelines
         */
        public function setTheTimelines($theTimelines)
        {
            $this->theTimelines = $theTimelines;
        }

        public function jsonSerialize(){
            return get_object_vars($this);
        }
    }
?>