from train_model import train_target

from config import TARGETS


def main():

    for target in TARGETS:

        train_target(target)


if __name__ == "__main__":

    main()