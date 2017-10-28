CREATE TABLE User 
(
	UserID INT AUTO_INCREMENT NOT NULL,
	FirstName VARCHAR(25) NOT NULL,
	LastName VARCHAR(30) NOT NULL,
	Email VARCHAR(50) NOT NULL,
	HashValue CHAR(93) NOT NULL,
	Phone VARCHAR(12),
	Picture VARCHAR(100) NOT NULL,
	Address1 VARCHAR(100) NOT NULL,
	Address2 VARCHAR(100),
	City VARCHAR(100) NOT NULL,
	State CHAR(2) NOT NULL,
	Zip INT NOT NULL,
	JoinDate DATETIME DEFAULT CURRENT_TIMESTAMP,
	ContactMethod ENUM('Email', 'Text') DEFAULT 'Email',
	Bio VARCHAR(500),
	FamilyInfo VARCHAR(500),
	DisabilityInfo VARCHAR(500),
	PRIMARY KEY (UserID)
);
	
CREATE TABLE Community
(
	CommunityID INT AUTO_INCREMENT NOT NULL,
	Name VARCHAR(100),
	Description VARCHAR(500),
	CreationDate DATETIME DEFAULT CURRENT_TIMESTAMP,
	IsPublic TINYINT(1) DEFAULT 1,
	Picture VARCHAR(100),
	Address1 VARCHAR(100),
	Address2 VARCHAR(100),
	City VARCHAR(100),
	State CHAR(2),
	Zip INT,
	UserCount INT DEFAULT 0,
	MaxUser INT,
	PRIMARY KEY (CommunityID)
);

CREATE TABLE Category
(
	CategoryID INT AUTO_INCREMENT NOT NULL,
	Name VARCHAR(100),
	IsPublicOption TINYINT(1) DEFAULT 0,
	PRIMARY KEY (CategoryID)
);

CREATE TABLE Post
(
	PostID INT AUTO_INCREMENT NOT NULL,
	Status ENUM('Active','Accepted', 'Complete', 'Canceled', 'Inactive'),
	AuthorID INT,
	HelperID INT,
	Title VARCHAR(100),
	Description VARCHAR(500),
	CategoryID INT,
	Address1 VARCHAR(100),
	Address2 VARCHAR(100),
	City VARCHAR(100),
	State CHAR(2),
	Zip INT,
	EstimatedTime ENUM('15 Minutes', '30 Minutes', '1 Hour', '2 Hours', '4 Hours', '8 Hours'),
	PostDate DATETIME DEFAULT CURRENT_TIMESTAMP,
	ExpirationDate DATETIME DEFAULT NULL,
	AcceptanceDate DATETIME,
	LastUpdated DATETIME ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (PostID),
	FOREIGN KEY (AuthorID) REFERENCES User(UserID),
	FOREIGN KEY (HelperID) REFERENCES User(UserID),
	FOREIGN KEY (CategoryID) REFERENCES Category(CategoryID)
);

CREATE TABLE Conversation
(
	ConversationID INT AUTO_INCREMENT NOT NULL,
	PostID INT,
	HelperID INT,
	PostAuthorID INT,
	LastMessage DATETIME,
	IsRead TINYINT(1) DEFAULT 0,
	PRIMARY KEY (ConversationID),
	FOREIGN KEY (PostID) REFERENCES Post(PostID),
	FOREIGN KEY (HelperID) REFERENCES User(UserID),
	FOREIGN KEY (PostAuthorID) REFERENCES User(UserID)
);

CREATE TABLE Message
(
	MessageID INT AUTO_INCREMENT NOT NULL,
	ConversationID INT,
	AuthorID INT,
	Timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
	Body VARCHAR(500) NOT NULL,
	PRIMARY KEY (MessageID),
	FOREIGN KEY (ConversationID) REFERENCES Conversation(ConversationID),
	FOREIGN KEY (AuthorID) REFERENCES User(UserID)
);

CREATE TABLE Review
(
	ReviewID INT AUTO_INCREMENT NOT NULL,
	AuthorID INT,
	RecipientID INT,
	PostID INT,
	ReviewDate DATETIME DEFAULT CURRENT_TIMESTAMP,
	Rating INT,
	Body VARCHAR(500),
	IsPublic TINYINT(1) DEFAULT 1,
	PRIMARY KEY (ReviewID),
	FOREIGN KEY (AuthorID) REFERENCES User(UserID),
	FOREIGN KEY (RecipientID) REFERENCES User(UserID),
	FOREIGN KEY (PostID) REFERENCES Post(PostID)
);

CREATE TABLE Skill
(
	SkillID INT AUTO_INCREMENT NOT NULL,
	Name VARCHAR(100) NOT NULL,
	IsPublicOption TINYINT(1) DEFAULT 0,
	PRIMARY KEY (SkillID)
);

CREATE TABLE Membership
(
	UserID INT,
	CommunityID INT,
	Role ENUM('Owner', 'Admin', 'Member'),
	PRIMARY KEY (UserID, CommunityID),
	FOREIGN KEY (UserID) REFERENCES User(UserID),
	FOREIGN KEY (CommunityID) REFERENCES Community(CommunityID)
);

CREATE TABLE PostCommunity
(
	PostID INT,
	CommunityID INT,
	PRIMARY KEY (PostID, CommunityID),
	FOREIGN KEY (PostID) REFERENCES Post(PostID),
	FOREIGN KEY (CommunityID) REFERENCES Community(CommunityID)
);

CREATE TABLE CustomMessage
(
	CustomMessageID INT AUTO_INCREMENT NOT NULL,
	UserID INT,
	Title VARCHAR(50) NOT NULL,
	Body VARCHAR(500) NOT NULL,
	UseCount INT DEFAULT 0,
	LastUsed DATETIME,
	PRIMARY KEY (CustomMessageID),
	FOREIGN KEY (UserID) REFERENCES User(UserID)
);

CREATE TABLE UserSkill
(
	UserID INT,
	SkillID INT,
	PRIMARY KEY (UserID, SkillID),
	FOREIGN KEY (UserID) REFERENCES User(UserID),
	FOREIGN KEY (SkillID) REFERENCES Skill(SkillID)
);

CREATE TABLE PostCategory
(
	PostID INT,
	CategoryID INT,
	PRIMARY KEY (PostID, CategoryID),
	FOREIGN KEY (PostID) REFERENCES Post(PostID),
	FOREIGN KEY (CategoryID) REFERENCES Category(CategoryID)
);

CREATE TABLE Resource
(
	ResourceID INT AUTO_INCREMENT NOT NULL,
	Name VARCHAR(100),
	IsPublicOption TINYINT(1),
	PRIMARY KEY (ResourceID)
);

CREATE TABLE UserResource
(
	UserID INT,
	ResourceID INT,
	PRIMARY KEY (UserID, ResourceID),
	FOREIGN KEY (UserID) REFERENCES User(UserID),
	FOREIGN KEY (ResourceID) REFERENCES Resource(ResourceID)
);

CREATE TABLE Report
(
	ReportID INT AUTO_INCREMENT NOT NULL,
	AuthorID INT,
	RecipientID INT,
	Reason ENUM('Inappropriate', 'Spam', 'Discrimination', 'Illegal', 'Other'),
	Body VARCHAR(500),
	PRIMARY KEY (ReportID),
	FOREIGN KEY (AuthorID) REFERENCES User(UserID),
	FOREIGN KEY (RecipientID) REFERENCES User(UserID)
);

CREATE TABLE Feedback
(
	FeedbackID INT AUTO_INCREMENT NOT NULL,
	AuthorID INT,
	Body VARCHAR(500),
	PRIMARY KEY (FeedbackID),
	FOREIGN KEY (AuthorID) REFERENCES User(UserID)
);

CREATE TABLE CanceledPost
(
	PostID INT,
	UserID INT,
	Reason VARCHAR(500),
	PRIMARY KEY (PostID, UserID),
	FOREIGN KEY (PostID) REFERENCES Post(PostID),
	FOREIGN KEY (UserID) REFERENCES User(UserID)
);
