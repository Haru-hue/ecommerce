import Button from "../components/button/index";
import UserCard from "../components/userCard";
import BunnyAvatar from "../assets/bunny_avatar.png";

const dummyUser = {
  availability: "Mon - Sun (9am - 6pm)",
  name: "Mark Smith",
  imageUrl: BunnyAvatar,
  userId: "129",
};

export const ComponentsPage = () => (
  <div>
    <ButtonsDemo />
    <UserProfile />
  </div>
);

const UserProfile = () => (
  <section className="separator">
    <h3>User Profile</h3>
    <details>
      <p className="separator">
        <h4>Visitor</h4>
        <hr />
        <UserCard isOwner={false} user={dummyUser} />
        <br />
        <hr />
        <h4>Owner</h4>
        <UserCard isOwner={true} user={dummyUser} />
      </p>
    </details>
    <hr />
  </section>
);

const ButtonsDemo = () => (
  <section className="separator">
    <h3>Buttons</h3>
    <details>
      <hr />
      <p className="separator">
        <h3>Primary</h3>
        <hr />
        <Button size="sm">Click me</Button>
        <br />
        <br />
        <Button>Click me</Button>
        <br />
        <br />
        <Button size="lg">Click me</Button>
        <br />
        <br />
        <Button size="sm" variant="outlined">
          Click me
        </Button>
        <br />
        <br />
        <Button variant="outlined">Click me</Button>
        <br />
        <br />
        <Button size="lg" variant="outlined">
          Click me
        </Button>
      </p>
      <hr />
      <p className="separator">
        <h3>Secondary</h3>
        <hr />
        <Button size="sm" color="secondary">
          Click me
        </Button>
        <br />
        <br />
        <Button color="secondary">Click me</Button>
        <br />
        <br />
        <Button color="secondary" size="lg">
          Click me
        </Button>
        <br />
        <br />
        <Button color="secondary" size="sm" variant="outlined">
          Click me
        </Button>
        <br />
        <br />
        <Button color="secondary" variant="outlined">
          Click me
        </Button>
        <br />
        <br />
        <Button color="secondary" size="lg" variant="outlined">
          Click me
        </Button>
      </p>
      <hr />
      <p className="separator">
        <h3>Tertiary</h3>
        <hr />
        <Button color="tertiary" size="sm">
          Click me
        </Button>
        <br />
        <br />
        <Button color="tertiary">Click me</Button>
        <br />
        <br />
        <Button color="tertiary" size="lg">
          Click me
        </Button>
        <br />
        <br />
        <Button color="tertiary" size="sm" variant="outlined">
          Click me
        </Button>
        <br />
        <br />
        <Button color="tertiary" variant="outlined">
          Click me
        </Button>
        <br />
        <br />
        <Button color="tertiary" size="lg" variant="outlined">
          Click me
        </Button>
      </p>
    </details>
    <hr />
  </section>
);

export default ComponentsPage;
