tasks = []

def add_task():
    name = input("Enter the task name: ")
    description = input("Enter a short description of the task: ")
    priority = 0
    urgency = input("Is this task urgent? (yes/no): ").strip().lower()
    if urgency == "yes":
        priority += 2
    importance = input("Is this task important? (yes/no): ").strip().lower()
    if importance == "yes":
        priority += 3
    task = {"name": name, "description": description, "priority": priority}
    tasks.append(task)
    print(f"Task '{name}' added with priority {priority}.\n")

def display_tasks():
    sorted_tasks = sorted(tasks, key=lambda x: x["priority"], reverse=True)
    print("\nTasks sorted by priority:")
    for task in sorted_tasks:
        print(f"Task: {task['name']}, Priority: {task['priority']}, Description: {task['description']}")

def main():
    while True:
        print("\nTask Prioritizer Menu")
        print("1. Add a task")
        print("2. View tasks by priority")
        print("3. Exit")
        choice = input("Choose an option (1, 2, or 3): ")
        if choice == "1":
            add_task()
        elif choice == "2":
            display_tasks()
        elif choice == "3":
            print("Goodbye!")
            break
        else:
            print("Invalid option. Please choose 1, 2, or 3.")

if __name__ == "__main__":
    main()
