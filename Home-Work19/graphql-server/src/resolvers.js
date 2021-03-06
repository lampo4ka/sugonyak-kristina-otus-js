import { users, userBills, catalog } from "./db";

const resolvers = {
	Query: {
		user: (parent, { id }, context, info) => {
			return users.find(user => user.id === id);
		},
		users: (parent, args, context, info) => {
			return users;
		},
		userBills: (parent, args, context, info) => {
			return userBills;
		},
		catalog: (parent, args, context, info) => {
			return catalog;
		}
	},

	Mutation: {
		createUser: (parent, { id, name, email, age }, context, info) => {
			const newUser = { id, name, email, age };

			users.push(newUser);

			return newUser;
		},
		deleteUser: (parent, { id }, context, info) => {
			const userIndex = users.findIndex(user => user.id === id);

			if (userIndex === -1) throw new Error("User not found.");

			const deletedUsers = users.splice(userIndex, 1);

			return deletedUsers[0];
		},
		addNewItem: (parent, { id, name, qty }, context, info) => {
			const newItem = { id, name, qty };

			catalog.push(newItem);

			return newItem;
		}
	}
};

export default resolvers;
